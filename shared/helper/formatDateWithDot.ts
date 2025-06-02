export default function formatDateWithDot(v: Date): string {
  return `${v.getFullYear()}.${v.getMonth() + 1}.${v.getDate()}`;
}