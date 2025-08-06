function App() {
  const handleDownload = async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = new URL(tab.url);
    const faviconUrl = url.origin + "/favicon.ico";

    chrome.downloads.download({
      url: faviconUrl,
      filename: "favicon.ico"
    });
  };

  return (
    <div className="p-4 w-64 bg-white text-center">
      <h1 className="text-lg font-bold mb-4">Favicon Downloader</h1>
      <button
        onClick={handleDownload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Favicon
      </button>
    </div>
  );
}

export default App;
