import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToLocalStorage } from "../utils/storage";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, password } = formData;

    if (name.trim() && phone.trim() && email.trim() && password.trim()) {
      saveToLocalStorage("user", formData);
      navigate("/weather");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg">

      <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Name<span className="text-red-700"> *</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Input your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Phone<span className="text-red-700"> *</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Input your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Email<span className="text-red-700"> *</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Input your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-6 relative">
        <label className="block text-gray-700 font-medium mb-1">
          Password<span className="text-red-700"> *</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Input your password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 bottom-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
        >
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full p-3 text-white font-semibold rounded bg-gradient-to-b from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Login
      </button>
    </form>
  );
};

export default Form;
