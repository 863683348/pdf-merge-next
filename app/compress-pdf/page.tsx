import ToolPage, { makeToolMetadata } from '@/components/organisms/tools/ToolPage';

export const metadata = makeToolMetadata('compress');

export default function Page() {
  return <ToolPage tool="compress" />;
}
