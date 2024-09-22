import DefaultInput from '../UI/inputs/DefaultInput/DefaultInput.tsx';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      Home Page
      <DefaultInput />
      <DefaultInput
        placeholder="What is your name?"
        label="Input with placeholder"
      />
      <DefaultInput
        placeholder="What is your name?"
        value="12334444"
        label="Input with placeholder + value"
        onChange={(v: string) => console.log(v)}
      />
      <DefaultInput
        placeholder="What is your name?"
        label="disabled input"
        disabled
      />
    </div>
  );
}
