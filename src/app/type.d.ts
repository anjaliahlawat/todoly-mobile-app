type UserObj = {
  _id: string;
};

type ContextType = {
  user: UserObj | null | undefined;
  setUser: (user: UserObj | null) => void;
};

type RegisterProps = {
  username?: string;
  phoneNumber?: string;
  email: string;
  password: string;
};

type Task = {
  type: string;
  desc: string;
};
