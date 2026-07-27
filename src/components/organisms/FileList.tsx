'use client';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type Announcements,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useAppStore } from '../../store/useAppStore';
import { FileCard } from '../molecules/FileCard';
import { useT } from '../../i18n/provider';

// F3 文件级拖拽重排 + 键盘可达（无指针也可排序）
export function FileList() {
  const files = useAppStore((s) => s.files);
  const reorder = useAppStore((s) => s.reorder);
  const t = useT();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const nameOf = (id: string | number) =>
    useAppStore.getState().files.find((f) => f.id === id)?.name ?? '';

  const announcements: Announcements = {
    onDragStart: ({ active }) => t('dnd.start', { name: nameOf(active.id) }),
    onDragOver: ({ active, over }) =>
      over
        ? t('dnd.over', { active: nameOf(active.id), over: nameOf(over.id) })
        : '',
    onDragEnd: ({ active, over }) =>
      over
        ? t('dnd.end', { active: nameOf(active.id), over: nameOf(over.id) })
        : '',
    onDragCancel: ({ active }) =>
      t('dnd.cancel', { name: nameOf(active.id) }),
  };

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      reorder(String(active.id), String(over.id));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
      accessibility={{ announcements }}
    >
      <SortableContext
        items={files.map((f) => f.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className="flex flex-col gap-2">
          {files.map((item) => (
            <li key={item.id}>
              <FileCard item={item} />
            </li>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
