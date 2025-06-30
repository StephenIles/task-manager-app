const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to TaskMaster
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your modern task manager. Manage tasks effortlessly and collaborate.
        </p>
        <div className="space-x-4">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
