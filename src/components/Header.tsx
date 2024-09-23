type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

function Header({ activeTab, setActiveTab }: Props) {
  return (
    <header className="main__header">
      <img
        className="main__header-logo"
        src="../../public/logo.svg"
        alt="Логотип ostest"
      />
      <div className="main__header-buttons">
        <button
          type="button"
          className={`main__header-button ${activeTab === 'labs' ? 'main__header-button-checked' : ''}`}
          onClick={() => setActiveTab('labs')}>
          Лабораторные
        </button>
        <button
          type="button"
          className={`main__header-button ${activeTab === 'rating' ? 'main__header-button-checked' : ''}`}
          onClick={() => setActiveTab('rating')}>
          Рейтинг
        </button>
      </div>
      <img className="main__header-avatar" src="../../public/avatar.png" />
    </header>
  );
}

export default Header;
