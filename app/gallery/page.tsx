import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import "./gallery.css";

const galleryItems = [
  { id: "1", src: "/s-315x315_webp_4d7a581c-5ab3-4a82-a0a0-bb2f1223464b.jpg", title: "Photo 1" },
  { id: "2", src: "/s-315x315_webp_4d7a581c-5ab3-4a82-a0a0-bb2f1223464b.jpg", title: "Photo 2" },
  { id: "3", src: "/s-315x315_webp_4d7a581c-5ab3-4a82-a0a0-bb2f1223464b.jpg", title: "Photo 3" },
  { id: "4", src: "/s-315x315_webp_4d7a581c-5ab3-4a82-a0a0-bb2f1223464b.jpg", title: "Photo 4" },
  { id: "5", src: "https://storage.googleapis.com/studio-design-asset-files/projects/EjOQVQlLqJ/s-315x315_webp_6d97efca-8892-46ae-8e37-04dea6361901.webp", title: "Photo 5" },
  { id: "6", src: "https://storage.googleapis.com/studio-design-asset-files/projects/EjOQVQlLqJ/s-1376x1813_v-frms_webp_67a45377-3ddb-4ea6-bbfe-0a869f6da410_middle.webp", title: "Photo 6" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <nav className="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb_list">
            <li className="breadcrumb_item"><Link href="/"><i className="fa-regular fa-house"></i> Home</Link></li>
            <li className="breadcrumb_item">Gallery</li>
          </ol>
        </nav>
      <main className="page_main">

        <section className="page_section">
          <div className="title_group">
            <h1 className="page_h1">Gallery</h1>
            <p className="title_text_jp">ギャラリー</p>
          </div>

          <div className="card-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="gallery-item__img"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
