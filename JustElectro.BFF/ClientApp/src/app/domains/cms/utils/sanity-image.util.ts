const PROJECT_ID = 'm4xxam07';
const DATASET = 'production';

export function sanityImageUrl(image: any, width?: number): string {
  if (!image?.asset?._ref) {
    return '';
  }

  // Sanity asset ref format: image-{id}-{dimensions}-{format}
  const ref: string = image.asset._ref;
  const parts = ref.split('-');

  if (parts.length < 4 || parts[0] !== 'image') {
    return '';
  }

  const format = parts[parts.length - 1];
  const dimensions = parts[parts.length - 2];
  const id = parts.slice(1, parts.length - 2).join('-');

  const base = `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${id}-${dimensions}.${format}`;

  return width != null
    ? `${base}?w=${width}&auto=format`
    : `${base}?auto=format`;
}
