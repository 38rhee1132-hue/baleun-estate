import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. 네비게이션 헤더 */}
      <header className="bg-[#0A0F26] text-white w-full p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#F2C94C]">
            바른부동산중개
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm font-bold">
              <li className="hover:text-[#F2C94C] cursor-pointer">Home</li>
              <li className="hover:text-[#F2C94C] cursor-pointer">매물 검색</li>
              <li className="hover:text-[#F2C94C] cursor-pointer">상담 문의</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 2. 메인 배너 (Hero) */}
      <section className="bg-gray-50 py-24 px-4 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A0F26] mb-6">
          수원·영통 최고의 상업용 매물
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          정확한 매물 정보와 전문 상담으로 비즈니스 성공을 앞당겨 드립니다.
        </p>
        <button className="bg-[#F2C94C] text-[#0A0F26] font-bold text-lg py-4 px-10 rounded shadow-lg hover:opacity-90 transition">
          추천 매물 검색하기
        </button>
      </section>
      
      {/* 3. 간단한 회사 소개 */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-[#0A0F26] mb-2">경기도 최대 상가·사무실 네트워크</h2>
        <p className="text-gray-500">신뢰와 투명성을 바탕으로 최적의 공간을 찾아드립니다.</p>
      </section>
    </div>
  );
}

export default App;