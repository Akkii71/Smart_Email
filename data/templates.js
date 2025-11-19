export const templates = [
    {
      id: "cover-letter",
      name: "Cover Letter",
      structure: `
  Dear Hiring Manager,
  
  I am writing to express my interest in the position at your organization. Based on the job description provided:
  {{jobDescription}}
  
  I believe I am a strong fit because:
  {{achievements}}
  
  Thank you for considering my application.
  
  Best regards,
  {{name}}
  `
    },
    {
      id: "cold-email",
      name: "Cold Email",
      structure: `
  Hi there,
  
  I hope you're doing well. I came across your profile/company and was impressed by your work in:
  {{jobDescription}}
  
  A bit about me:
  {{achievements}}
  
  I would love to connect or collaborate.
  
  Regards,
  {{name}}
  `
    },
    {
      id: "job-application",
      name: "Job Application Email",
      structure: `
  Hello Hiring Team,
  
  I am applying for the role mentioned below:
  {{jobDescription}}
  
  My key strengths include:
  {{achievements}}
  
  Looking forward to hearing from you.
  
  Sincerely,
  {{name}}
  `
    },
    {
      id: "proposal",
      name: "Freelance Proposal",
      structure: `
  Hello,
  
  I reviewed your project requirement:
  {{jobDescription}}
  
  Here’s how I can help:
  {{achievements}}
  
  Let me know if you'd like to discuss further.
  
  Best,
  {{name}}
  `
    },
    {
      id: "follow-up",
      name: "Follow-up Email",
      structure: `
  Hello,
  
  I wanted to follow up regarding the opportunity:
  {{jobDescription}}
  
  Just sharing a reminder of my relevant experience:
  {{achievements}}
  
  Looking forward to your update.
  
  Best regards,
  {{name}}
  `
    },
    {
      id: "referral",
      name: "Referral Request",
      structure: `
  Hi,
  
  Hope you’re doing well. I am exploring opportunities related to:
  {{jobDescription}}
  
  Here are a few of my achievements:
  {{achievements}}
  
  Could you please refer me if possible?
  
  Warm regards,
  {{name}}
  `
    }
  ];
  