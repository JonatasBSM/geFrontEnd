//conversion functions
export function pascal_to_kebab(text: string): string {
  return text
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase();
}

export function camel_to_kebab(text: string): string {
  return text
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
}

export function camel_to_pascal(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function pascal_to_camel(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

//type validation functions
export function is_kebab(text: string): boolean {
  return text.includes('-');
}

export function is_snake(text: string): boolean {
    return text.includes('_');
}

export function is_camel(text: string): boolean {

  if(is_kebab(text) || is_snake(text)) {
    return false;
  }

  return text[0].toLowerCase() === text[0];
}

export function is_pascal(text: string): boolean {
  if(is_kebab(text) || is_snake(text)) {
    return false;
  }

  return text[0].toUpperCase() === text[0];
}

