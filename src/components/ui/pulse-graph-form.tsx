import React from 'react';

const PulseGraphForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
      <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
        Web Vitals Pulse Graph
      </h2>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
        Enter a URL to see its Web Vitals pulse graph.
      </p>
      {/* Form will go here */}
      <div className="mt-8 w-full max-w-md">
        <form className="flex gap-4">
          <input
            type="url"
            placeholder="Enter URL (e.g., https://example.com)"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default PulseGraphForm;