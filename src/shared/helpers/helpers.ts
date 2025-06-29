export function truncateFileName(name: string, maxLength: number = 50): string {
  if (name.length <= maxLength) return name;

  const extIndex = name.lastIndexOf('.');
  const ext = extIndex !== -1 ? name.slice(extIndex) : '';
  const base = extIndex !== -1 ? name.slice(0, extIndex) : name;

  const allowedBaseLength = maxLength - ext.length - 3;
  const front = Math.ceil(allowedBaseLength / 2);
  const back = Math.floor(allowedBaseLength / 2);

  return `${base.slice(0, front)}...${base.slice(-back)}${ext}`;
}

export function generateSecureRandomString(length: number = 32): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  return Array.from(array, (num) => characters[num % charactersLength]).join(
    ''
  );
}
