'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Input } from '@/shared/components/shadcn/ui/input';
import { Label } from '@/shared/components/shadcn/ui/label';
import { Textarea } from '@/shared/components/shadcn/ui/textarea';
import { ImagePlus } from 'lucide-react';
import {
  createProductAction,
  editProductAction,
} from '@/features/admin/actions/product/action';
import AlertDialogComponent from '@/shared/components/admin/AlertDialogComponent';
import SuccessAlertDialog from '@/shared/components/success-alert-dialog/SuccessAlertDialog';
import FailedAlertDialog from '@/shared/components/failed-alert-dialog/FailedAlertDialog';
import { Upload, Trash2 } from 'lucide-react';

type ProductFormProps = {
  mode: 'create' | 'edit';
  defaultValues?: {
    id: number;
    code: string;
    description: string;
    thickness: string;
    gloss: string;
    quv: string;
    warranty: string;
    specs?: Record<string, { value_1?: string; value_2?: string }>;
  };
  specSections: {
    title: string;
    items: {
      code: string;
      label: string;
    }[];
  }[];
};

export default function ProductForm({
  mode,
  defaultValues,
  specSections,
}: ProductFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    id: defaultValues?.id || '',
    code: defaultValues?.code || '',
    description: defaultValues?.description || '',
    thickness: defaultValues?.thickness || '',
    gloss: defaultValues?.gloss || '',
    quv: defaultValues?.quv || '',
    warranty: defaultValues?.warranty || '',
    specs: defaultValues?.specs || {},
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showFailedDialog, setShowFailedDialog] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const initialSpecs: Record<string, { value_1?: string; value_2?: string }> =
      {};
    specSections.forEach((section) => {
      section.items.forEach(({ code }) => {
        initialSpecs[code] = { value_1: '', value_2: '' };
      });
    });

    setForm((prev) => ({
      ...prev,
      specs: {
        ...initialSpecs,
        ...prev.specs,
      },
    }));
  }, [specSections]);

  const isFormValid = () => {
    const requiredFieldsFilled =
      form.code.trim() !== '' &&
      form.description.trim() !== '' &&
      form.thickness.trim() !== '' &&
      form.gloss.trim() !== '' &&
      form.quv.trim() !== '' &&
      form.warranty.trim() !== '';

    return mode === 'create'
      ? requiredFieldsFilled && imageFile !== null
      : requiredFieldsFilled;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMB = file.size / (1024 * 1024);
      if (sizeMB > 5) {
        alert('File size exceeds 5MB. Please select a smaller file.');
        return;
      }
      setImageFile(file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith('specs.')) {
      const [, code, field] = name.split('.');
      setForm((prev) => ({
        ...prev,
        specs: {
          ...prev.specs,
          [code]: {
            ...prev.specs[code],
            [field]: value,
          },
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('code', form.code);
    formData.append('description', form.description);
    formData.append('thickness', form.thickness);
    formData.append('gloss', form.gloss);
    formData.append('quv', form.quv);
    formData.append('warranty', form.warranty);
    if (imageFile) formData.append('image', imageFile);
    if (mode === 'edit') {
      formData.append('id', String(form.id)); // 👈 kirim id produk
    }

    for (const [code, values] of Object.entries(form.specs)) {
      formData.append(`specs.${code}.value_1`, values.value_1 ?? '');
      formData.append(`specs.${code}.value_2`, values.value_2 ?? '');
    }

    try {
      const result =
        mode === 'create'
          ? await createProductAction(formData)
          : await editProductAction(formData);

      if (result?.success) {
        setShowSuccessDialog(true);
        setTimeout(() => router.push('/product'), 1500);
      } else {
        setShowFailedDialog(true);
      }
    } catch {
      setShowFailedDialog(true);
    }
  };

  return (
    <form className="space-y-6">
      <div className="border rounded-lg py-6 px-4 border-b-2 border-gray-200 space-y-4">
        <h3 className="text-md font-medium text-[#09090B]">
          Introduction Page
        </h3>

        <div className="space-y-2">
          <Label className="text-black text-[14px]/[20px]">Product Name*</Label>
          <Input
            name="code"
            value={form.code}
            onChange={handleChange}
            placeholder="Enter your product name..."
            className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B] h-14"
          />
        </div>

        <Label className="text-black text-[14px]/[20px]">Product Image*</Label>
        {imageFile ? (
          <div className="flex items-center justify-between border rounded-md px-4 py-3">
            <span className="truncate text-[14px]/[20px] text-[#09090B]">
              {imageFile.name}
            </span>
            <div className="flex gap-2">
              <label htmlFor="upload-image" className="cursor-pointer">
                <Input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  key={imageFile?.name || 'initial'}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                  className="text-black border-gray-300 text-[14px]/[20px]"
                >
                  <span className="flex items-center gap-1">
                    <Upload className="w-4 h-4" />
                  </span>
                </Button>
              </label>
              <Button
                type="button"
                variant="outline"
                className="border-red-500 text-red-500 text-[14px]/[20px]"
                onClick={() => setImageFile(null)}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ) : (
          <label
            htmlFor="upload-image"
            className="flex items-center gap-2 text-base border rounded-md w-full h-14 px-4 py-2 cursor-pointer text-gray-500"
          >
            <ImagePlus className="w-4 h-4" />
            Upload Thumbnail image
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}

        <div className="space-y-2">
          <Label className="text-black text-[14px]/[20px]">
            Product Description*
          </Label>
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter product description..."
            className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B] h-36"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['thickness', 'gloss', 'quv', 'warranty'].map((field) => (
            <div key={field} className="space-y-2">
              <Label className="text-black text-[14px]/[20px]">
                {field.charAt(0).toUpperCase() + field.slice(1)}*
              </Label>
              <Input
                name={field}
                value={(form as any)[field]}
                onChange={handleChange}
                placeholder={`e.g. ${field === 'quv' ? '2000' : field === 'gloss' ? '90' : '10'}`}
                className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B] h-14"
              />
            </div>
          ))}
        </div>

        <h3 className="text-black text-base md:text-lg font-semibold mt-8 mb-4">
          Specifications Page
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-black text-[14px]/[20px] font-semibold">
                {section.title}
              </h4>
              {section.items.map(({ code, label }) => (
                <div key={code} className="space-y-2">
                  <Label className="block text-black text-[14px]/[20px]">
                    {label}
                  </Label>
                  {code === 'WARRANTY' ? (
                    <Input
                      name={`specs.${code}.value_1`}
                      value={form.specs[code]?.value_1 || ''}
                      onChange={handleChange}
                      placeholder="e.g. 10 years"
                      className="w-full !text-[14px]/[20px] text-[#09090B] h-14"
                    />
                  ) : (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                      <Input
                        name={`specs.${code}.value_1`}
                        value={form.specs[code]?.value_1 || ''}
                        onChange={handleChange}
                        placeholder="Performance"
                        className="w-full !text-[14px]/[20px] text-[#09090B] h-14"
                      />
                      <Input
                        name={`specs.${code}.value_2`}
                        value={form.specs[code]?.value_2 || ''}
                        onChange={handleChange}
                        placeholder="Testing Method"
                        className="w-full !text-[14px]/[20px] text-[#09090B] h-14"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="text-black text-[14px]/[20px]"
          >
            Cancel
          </Button>

          <AlertDialogComponent
            title={mode === 'create' ? 'Create Product?' : 'Edit Product?'}
            description={
              mode === 'create'
                ? 'Are you sure you want to create this product?'
                : 'Are you sure you want to edit this product?'
            }
            triggerLabel={
              <Button
                type="button"
                disabled={!isFormValid()}
                className="bg-black text-white text-[14px]/[20px]"
              >
                {mode === 'create' ? 'Create Product' : 'Edit Product'}
              </Button>
            }
            onConfirm={handleSubmit}
          />
        </div>
      </div>

      <SuccessAlertDialog
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        message={
          mode === 'create'
            ? 'The product has been created successfully.'
            : 'The product has been edited successfully.'
        }
        autoCloseMs={2000}
      />

      <FailedAlertDialog
        open={showFailedDialog}
        onOpenChange={setShowFailedDialog}
        message={
          mode === 'create'
            ? 'There was a problem creating the product. Please try again.'
            : 'There was a problem editing the product. Please try again.'
        }
      />
    </form>
  );
}
