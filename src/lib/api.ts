// Temporary API layer – replace with real backend later

export const loginUser = async (email: string, password: string): Promise<{ user: any }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({
          user: {
            email,
            token: 'mock-jwt-token',
            role: 'organizer'
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
};

export const createTournament = async (data: any): Promise<any> => {
  // Simulate saving to backend
  console.log("Creating tournament:", data);

  // Return a fake response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...data,
        id: Math.floor(Math.random() * 1000),
        createdAt: new Date().toISOString()
      });
    }, 500);
  });
};

export const getTournaments = async (): Promise<any[]> => {
  // Simulate fetching from backend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Shanghai Tens 2025',
          sport: 'Rugby',
          teams: 8,
          format: 'Round Robin',
          status: 'New'
        },
        {
          id: 2,
          name: 'Beijing Darts Cup',
          sport: 'Darts',
          teams: 4,
          format: 'Knockout',
          status: 'Underway'
        }
      ]);
    }, 500);
  });
};
