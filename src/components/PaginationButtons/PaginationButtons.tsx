import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';
import styles from '@styles/components/PaginationButtons.module.scss';

interface PaginationButtonsProps {
  handlePrevPage: (load: (page: number) => void) => void;
  handleNextPage: (load: (page: number) => void) => void;
  loadPage: (page: number) => void;
  isLoading: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
}

export default function PaginationButtons({
  handleNextPage,
  handlePrevPage,
  loadPage,
  isLoading,
  isFirstPage,
  isLastPage,
}: PaginationButtonsProps) {
  return (
    <div className={styles.buttonContainer}>
      <DefaultButton
        label="Назад"
        onClick={() => handlePrevPage(loadPage)}
        disabled={isFirstPage || isLoading}
      />
      <DefaultButton
        label="Вперед"
        onClick={() => handleNextPage(loadPage)}
        disabled={isLastPage || isLoading}
      />
    </div>
  );
}
