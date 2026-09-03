import ToolPage, { makeToolMetadata } from '@/components/organisms/tools/ToolPage';

export const metadata = makeToolMetadata('split');

export default function Page() {
  return <ToolPage tool="split" />;
}
