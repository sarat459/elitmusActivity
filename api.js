// api.js

// Mock function to fetch website usage data
export const fetchWebsiteUsageData = () => {
    // Mock data
    const mockData = [
      { name: 'https://leetcode.com/problemset/', timeSpent: '2 hours' },
      { name: 'https://meet.google.com/', timeSpent: '1.5 hours' }
    ];
    return Promise.resolve(mockData);
  };
  