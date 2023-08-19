type utilsOptions = {
  optional1?: number;
  optional2?: string;
};

const utilsExample = (required1: string, optional?: utilsOptions): number => {
  return 1;
};

// utilsExample("required1", undefined, 2);
