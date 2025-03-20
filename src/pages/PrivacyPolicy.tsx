import { marked } from 'marked'
import policy from './PrivacyPolicy.md?raw'

export const PrivacyPolicy: React.FC = () => {
  return (
    <main className="p-4">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: marked(policy) }} />
    </main>
  );
};
