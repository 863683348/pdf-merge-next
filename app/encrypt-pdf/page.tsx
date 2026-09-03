import ToolPage, { makeToolMetadata } from '@/components/organisms/tools/ToolPage';

export const metadata = makeToolMetadata('encrypt');

export default function Page() {
  return <ToolPage tool="encrypt" />;
}
