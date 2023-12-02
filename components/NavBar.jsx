import { SiNotion } from "react-icons/si";

const NavBar = () => {
  return (
    <div className="px-5 py-3 flex items-center justify-between sticky top-0 bg-white border-b-2 z-50">
      <div className="flex items-center space-x-10">
        <div className="flex items-center gap-2">
          <SiNotion className="h-8 w-8" />
          <h1 className="text-lg font-semibold">Notion</h1>
        </div>
        <h1>Product</h1>
        <h1>Download</h1>
        <h1>Solutions</h1>
        <h1>Resources</h1>
        <h1>Pricing</h1>
      </div>
      <div className="flex items-center space-x-4">
        <h1>Request a demo</h1>
        <h1>|</h1>
        <h1>Log in</h1>
        <button className="bg-black text-white px-2 py-1 rounded-md text-sm">
          Get Notion free
        </button>
      </div>
    </div>
  );
};

export default NavBar;
