import ToolPage, { makeToolMetadata } from '@/components/organisms/tools/ToolPage';

export const metadata = makeToolMetadata('rotate');

export default function Page() {
  return <ToolPage tool="rotate" />;
}
