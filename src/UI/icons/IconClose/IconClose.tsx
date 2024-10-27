interface IconCloseProps {
  color: string;
}

export default function IconClose({ color }: IconCloseProps) {
  const svg = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 4.5L19.5 19.5" stroke="${color}" stroke-width="2" stroke-linecap="round" />
            <path d="M4.5 19.5L19.5 4.50001" stroke="${color}" stroke-width="2" stroke-linecap="round" />
        </svg>
    `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
