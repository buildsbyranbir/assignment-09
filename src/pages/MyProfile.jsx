import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile Updated Successfully!");
        setIsEditing(false);
        // Manually update local state to reflect changes immediately
        setUser({ ...user, displayName: name, photoURL: photoURL });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 rounded-t-xl"></div>
        <div className="bg-base-100 shadow-xl rounded-b-xl p-6 -mt-12 relative z-10">
            
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-end mb-6">
             <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-white">
                    <img src={user?.photoURL || "https://i.ibb.co/MgsTCcv/avater.jpg"} alt="Profile" />
                </div>
            </div>
            <div className="text-center md:text-left mb-2 flex-grow">
                <h1 className="text-3xl font-bold">{user?.displayName || "User Name"}</h1>
                <p className="text-gray-500">{user?.email}</p>
            </div>
            <div>
                 <button 
                    onClick={() => setIsEditing(!isEditing)} 
                    className="btn btn-outline btn-primary"
                 >
                    {isEditing ? "Cancel" : "Update Profile"}
                 </button>
            </div>
          </div>

          <div className="divider"></div>

          <div className="animate__animated animate__fadeIn">
            <h2 className="text-xl font-bold mb-4">Profile Information</h2>
            
            {!isEditing ? (
                 <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row">
                        <span className="font-semibold w-32">Full Name:</span>
                        <span>{user?.displayName || "Not set"}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <span className="font-semibold w-32">Email:</span>
                        <span>{user?.email}</span>
                    </div>
                     <div className="flex flex-col sm:flex-row">
                        <span className="font-semibold w-32">Photo URL:</span>
                        <span className="truncate w-64 block text-gray-400 italic">{user?.photoURL || "Not set"}</span>
                    </div>
                 </div>
            ) : (
                <form onSubmit={handleUpdate} className="space-y-4 max-w-md">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Display Name</span>
                        </label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="input input-bordered" 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input 
                            type="text" 
                            value={photoURL} 
                            onChange={(e) => setPhotoURL(e.target.value)} 
                            className="input input-bordered" 
                        />
                    </div>
                    <button className="btn btn-primary text-white w-full mt-2">Save Changes</button>
                </form>
            )}
          </div>

        </div>
        
        <div className="bg-white mt-6 p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Welcome back, {user?.displayName?.split(" ")[0]}! ❄️</h3>
            <p>Don't forget to check out the latest winter tips for your pets.</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;