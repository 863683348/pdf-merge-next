import ToolPage, { makeToolMetadata } from '@/components/organisms/tools/ToolPage';

export const metadata = makeToolMetadata('pdf-to-image');

export default function Page() {
  return <ToolPage tool="pdf-to-image" />;
}
