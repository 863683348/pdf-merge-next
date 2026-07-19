import { ImageResponse } from 'next/og';

// 普通路由处理器（非 metadata 路由），避开 next-metadata-route-loader 对含引号路径的转义 bug。
// 纯 ASCII 文案，避免 CJK 字体缺失导致渲染失败。
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0b0e14',
          color: '#f9fafb',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#10b981' }} />
          <div style={{ fontSize: '34px', fontWeight: 700, letterSpacing: '-0.5px' }}>MergeLocal</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: '66px', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-1.5px' }}>
            Merge PDF locally.
          </div>
          <div style={{ fontSize: '42px', fontWeight: 600, color: '#10b981' }}>
            Private. No upload.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '28px', fontSize: '26px', color: '#9ca3af' }}>
          <span>merge pdf</span>
          <span>combine pdf</span>
          <span>offline pdf merge</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
