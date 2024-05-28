if (process.env.NODE_ENV !== 'production') {
    import('dotenv').then((dotenv) => {
      dotenv.config();
    });
  }
  
export const NODE_ENV: string = process.env.NODE_ENV ?? 'development'
  