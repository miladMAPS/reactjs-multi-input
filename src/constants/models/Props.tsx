export interface FormArrayProps {
  label: string;
  controls: string[];
  setInputList: React.Dispatch<React.SetStateAction<string[]>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  showError: boolean;
}

export interface InputProps {
  hasError: boolean
  label: string;
  value: string;
  onChange: any;
  canDelete: boolean;
  onDelete: any;
}

export interface FormFooterProps {
  save: any;
  cancel: any;
}
