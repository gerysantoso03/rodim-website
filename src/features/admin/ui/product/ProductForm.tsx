'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/components/shadcn/ui/button';
import { Input } from '@/shared/components/shadcn/ui/input';
import { Label } from '@/shared/components/shadcn/ui/label';
import { Textarea } from '@/shared/components/shadcn/ui/textarea';
import { ImagePlus } from 'lucide-react';

type ProductFormProps = {
  mode: 'create' | 'edit';
  defaultValues?: {
    code: string;
    description: string;
    thickness: string;
    gloss: string;
    quv: string;
    warranty: string;
  };
};

export default function ProductForm({ mode, defaultValues }: ProductFormProps) {
  const router = useRouter();

  const SPEC_SECTIONS = [
    {
      title: 'Physical Properties',
      fields: [
        'Thickness',
        'Gloss (60°)',
        'Haze',
        'Modulus of elasticity (MOE)',
        'Elongation at break of repair layer',
      ],
    },
    {
      title: 'Adhesion & Protection',
      fields: [
        'Initial adhesive',
        'Continuous adhesion',
        'Hydrophobicity',
        'UV barrier ratio',
        'Stain resistance',
      ],
    },
    {
      title: 'Durability & Resistance',
      fields: [
        'Scratch resistance',
        'Self-healing',
        'Yellowing resistance',
        'Acid and alkali resistance',
        'Carburetor detergent resistance',
        'Rain spot resistance',
        'Warranty',
      ],
    },
  ];

  const [form, setForm] = useState({
    code: defaultValues?.code || '',
    description: defaultValues?.description || '',
    thickness: defaultValues?.thickness || '',
    gloss: defaultValues?.gloss || '',
    quv: defaultValues?.quv || '',
    warranty: defaultValues?.warranty || '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'create') {
      console.log('Creating:', form);
    } else {
      console.log('Editing:', form);
    }
    router.push('/product');
  };

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border rounded-lg py-6 px-4 border-b-2 border-gray-200 space-y-4">
        <h3 className="text-md font-medium text-[#09090B]">
          Introduction Page
        </h3>

        <div className="space-y-2">
          <Label className="text-black text-[14px]/[20px]">Product Name*</Label>
          <Input
            name="name"
            value={form.code}
            // onChange={handleChange}
            placeholder="Enter your product name..."
            className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B] h-14"
          />
        </div>
        <Label className="text-black text-[14px]/[20px]">Product Image*</Label>
        <label
          htmlFor="upload-image"
          className="flex items-center gap-2 text-sm border rounded-md w-full h-14 px-4 py-2 cursor-pointer text-gray-500"
        >
          <ImagePlus className="w-4 h-4" />
          {image ? (
            <span className="truncate text-[#09090B]">Image Uploaded</span>
          ) : (
            'Upload Thumbnail image'
          )}
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        <div className="space-y-2">
          <Label className="text-black text-[14px]/[20px]">
            Product Description*
          </Label>
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter product description..."
            className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label className="text-black text-[14px]/[20px]">Thickness*</Label>
            <Input
              name="thickness"
              value={form.thickness}
              onChange={handleChange}
              placeholder="e.g. 8 mil"
              className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-black text-[14px]/[20px]">Gloss*</Label>
            <Input
              name="gloss"
              value={form.gloss}
              onChange={handleChange}
              placeholder="e.g. 90"
              className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-black text-[14px]/[20px]">QUV*</Label>
            <Input
              name="quv"
              value={form.quv}
              onChange={handleChange}
              placeholder="e.g. 2000"
              className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-black text-[14px]/[20px]">Warranty*</Label>
            <Input
              name="warranty"
              value={form.warranty}
              onChange={handleChange}
              placeholder="e.g. 10"
              className="!text-[14px]/[20px] !placeholder:text-[14px]/[20px] text-[#09090B]"
            />
          </div>
        </div>
        <h3 className="text-black text-base md:text-lg font-semibold mt-8 mb-4">
          Specifications Page
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPEC_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-black text-[14px]/[20px]">{section.title}</h4>
              {section.fields.map((label) => (
                <div key={label} className="space-y-2">
                  <Label className="block text-black text-[14px]/[20px]">
                    {label}
                  </Label>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                    <Input
                      name={`specs.${label}.performance`}
                      // value={form[`specs.${label}.value_1`] || ''}
                      onChange={handleChange}
                      placeholder="Performance"
                      className="w-full text-black text-[14px]/[20px]"
                    />
                    <Input
                      name={`specs.${label}.testing`}
                      // value={form[`specs.${label}.value_2`] || ''}
                      onChange={handleChange}
                      placeholder="Testing Method"
                      className="w-full text-black text-[14px]/[20px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" className="bg-black text-white">
            {mode === 'create' ? 'Create Product' : 'Edit Product'}
          </Button>
        </div>
      </div>
    </form>
  );
}
