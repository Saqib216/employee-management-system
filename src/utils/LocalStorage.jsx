const admin = {
  id: "admin001",
  name: "Muhammad Saqib Hussnain",
  email: "admin@ems.com",
  password: "Admin@123",
  role: "admin"
};

const employees = [
  {
    id: "emp001",
    name: "Ali Raza",
    email: "ali.raza@ems.com",
    password: "Ali@1234",
    role: "employee",
    tasksCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id: "task001",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix login page bug",
        taskDescription: "Resolve the validation error on the login form for empty password field.",
        taskDate: "2026-07-10",
        category: "Bug Fix"
      },
      {
        id: "task002",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update product catalog UI",
        taskDescription: "Redesign the product listing page with new card layout.",
        taskDate: "2026-07-05",
        category: "UI/UX"
      }
    ]
  },
  {
    id: "emp002",
    name: "Ayesha Khan",
    email: "ayesha.khan@ems.com",
    password: "Ayesha@1234",
    role: "employee",
    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        id: "task003",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Q3 sales report",
        taskDescription: "Compile sales data from July to September into a summary report.",
        taskDate: "2026-07-12",
        category: "Reporting"
      },
      {
        id: "task004",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client onboarding call",
        taskDescription: "Schedule and conduct onboarding call with new client.",
        taskDate: "2026-07-11",
        category: "Client Relations"
      },
      {
        id: "task005",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy marketing campaign",
        taskDescription: "Launch the email marketing campaign for new product line.",
        taskDate: "2026-07-08",
        category: "Marketing"
      }
    ]
  },
  {
    id: "emp003",
    name: "Bilal Ahmed",
    email: "bilal.ahmed@ems.com",
    password: "Bilal@1234",
    role: "employee",
    tasksCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        id: "task006",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database backup setup",
        taskDescription: "Configure automated daily backups for the production database.",
        taskDate: "2026-07-09",
        category: "Backend"
      },
      {
        id: "task007",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API documentation update",
        taskDescription: "Update the REST API docs with new endpoint changes.",
        taskDate: "2026-07-03",
        category: "Documentation"
      }
    ]
  },
  {
    id: "emp004",
    name: "Fatima Malik",
    email: "fatima.malik@ems.com",
    password: "Fatima@1234",
    role: "employee",
    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "task008",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design new landing page",
        taskDescription: "Create wireframes and mockups for the upcoming landing page redesign.",
        taskDate: "2026-07-13",
        category: "Design"
      },
      {
        id: "task009",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team performance review",
        taskDescription: "Conduct quarterly performance reviews for the design team.",
        taskDate: "2026-07-10",
        category: "HR"
      }
    ]
  },
  {
    id: "emp005",
    name: "Hamza Sheikh",
    email: "hamza.sheikh@ems.com",
    password: "Hamza@1234",
    role: "employee",
    tasksCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        id: "task010",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server migration",
        taskDescription: "Migrate legacy server infrastructure to new cloud provider.",
        taskDate: "2026-07-01",
        category: "DevOps"
      },
      {
        id: "task011",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment gateway integration",
        taskDescription: "Integrate Stripe payment gateway into checkout flow.",
        taskDate: "2026-07-06",
        category: "Backend"
      },
      {
        id: "task012",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security audit",
        taskDescription: "Run a full security audit on the authentication system.",
        taskDate: "2026-07-12",
        category: "Security"
      }
    ]
  },
  {
    id: "emp006",
    name: "Zainab Iqbal",
    email: "zainab.iqbal@ems.com",
    password: "Zainab@1234",
    role: "employee",
    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        id: "task013",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social media content calendar",
        taskDescription: "Plan and schedule social media posts for the next two weeks.",
        taskDate: "2026-07-13",
        category: "Marketing"
      },
      {
        id: "task014",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Customer feedback analysis",
        taskDescription: "Analyze recent customer survey responses and summarize key insights.",
        taskDate: "2026-07-09",
        category: "Research"
      }
    ]
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin }; // returning both as a single object
}