import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';

export default function HomePage() {
  return (
    <div>
      Home Page
      <DefaultDropdown
        options={[
          {
            className: 'first',
            value: '1',
            label: '1',
          },
          { className: 'second', value: '2', label: '2' },
          { className: 'third', value: '3', label: '3' },
        ]}
        value={'3'}
        onSelect={value => console.log(value)}
      />
    </div>
  );
}
