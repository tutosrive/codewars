export function twoFer(name: string | null = null): string {
  const local_name: string = name ?? 'you';
  return `One for ${local_name}, one for me.`;  
}