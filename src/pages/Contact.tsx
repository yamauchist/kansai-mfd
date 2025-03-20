import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setSuccess(null);
  
      try {
        await emailjs.send(
          "YOUR_SERVICE_ID", // EmailJSのサービスID
          "YOUR_TEMPLATE_ID", // EmailJSのテンプレートID
          formData,
          "YOUR_PUBLIC_KEY" // EmailJSの公開鍵
        );
        setSuccess("メッセージが送信されました！");
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSuccess("送信に失敗しました。もう一度お試しください。");
        console.error("Error sending email: ", error);
      }
      setLoading(false);
    };
  
    return (
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">お問い合わせ</h2>
        {success && <p className="mb-4 text-center text-green-600">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="お名前"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="メールアドレス"
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージ"
            className="w-full p-2 border rounded-lg"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "送信中..." : "送信"}
          </button>
        </form>
      </div>
    );
};
