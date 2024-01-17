import SectionCategory from './sections/section-category';
import SectionImage from './sections/section-image';
import SectionService from './sections/section-services';

export default function Home() {
  return (
    <div className="relative z-10">
      <SectionImage />
      <SectionCategory />
      <SectionService />
    </div>
  );
}
