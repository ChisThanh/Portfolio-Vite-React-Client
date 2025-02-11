export default function Summary() {
  return (
    <>
      <div className="p-6 ">
        <div className="max-w-4xl mx-auto bg-indigo-50 p-8 rounded-lg shadow-md ">
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/avatar.jpg"
                    className="w-10 h-10 rounded-full mr-2"
                    alt="ChisThanh Logo"
                  />
                  <span>Nguyễn Văn Chí Thanh</span>
                </div>
              </h1>
              <p className="text-gray-500">DOB: 18-04-2003</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/files/CV.pdf" target="_blank">
                <span className="text-white bg-gray-700 rounded-full p-3">
                  CV
                </span>
              </a>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold">Fullstack Developer</h2>
            <p className="text-gray-600">
              📞 0399323006 · ✉️ chisthanhdev@gmail.com · 📍 Go Vap District, Ho
              Chi Minh City
              <br />
              <span>
                🌐 &#160;
                <a
                  href="https://github.com/ChisThanh"
                  className="text-blue-500"
                  target="_blank"
                >
                  https://github.com/ChisThanh
                </a>
              </span>
              <span>
                &#160; 🌐 &#160;
                <a
                  href=" https://www.linkedin.com/in/chis-thanh"
                  target="_blank"
                  className="text-blue-500"
                >
                  https://www.linkedin.com/in/chis-thanh
                </a>
              </span>
            </p>
            <p className="mt-4 text-gray-700">
              📝 My name is Nguyễn Văn Chí Thanh, and I am currently a senior
              student majoring in Software Engineering. With 4 months of
              practical experience working with technologies such as Laravel and
              FastAPI, I have gained solid knowledge in software development,
              including OOP, SQL, and various Design Patterns. I am looking for
              opportunities to work in a professional environment where I can
              continue to learn and develop new skills.
            </p>
          </div>

          <div className="flex flex-wrap justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">Career goals</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Short-term: Become a Fullstack developer.</li>
                <li>3 years: Become a team leader.</li>
                <li>5 years: Become a Technical Leader.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Soft skills</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Problem-solving</li>
                <li>Data analysis</li>
                <li>Presentation skills</li>
                <li>Communication skills</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Ho Chi Minh City University of Industry and Trade (HUIT)
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Learning process
              </h4>
              <div className="mt-1 grid grid-cols-1 items-center lg:grid-cols-2">
                <div>
                  <p>
                    <strong>Year 1</strong> @2021 - 2022
                  </p>
                  <p>GPA: 3.19</p>
                </div>
                <div>
                  <p>
                    <strong>Year 2</strong> @2024 - 2023
                  </p>
                  <p>GPA: 3.11 - DSA: 4.0 - OOP: 4.0 - T-SQL: 4.0,...</p>
                </div>
                <div className="mt-2">
                  <p>
                    <strong>Year 3</strong> @2023 - 2024
                  </p>
                  <p>GPA: 3,18 - T-SQL: 4.0 - PHP - 4.0,...</p>
                </div>
                <div className="mt-2">
                  <p>
                    <strong>Year 4</strong> @2024 - Present
                  </p>
                  <p>
                    GPA: 3,5 - NoSQL: 4.0 - Data Analyst: 4.0 - AI: 3.5,...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-4 text-xl font-bold mb-4">Intern</h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Pogofdev Company
              </h4>
              <div className="mt-1 grid grid-cols-2 items-center">
                <div>
                  <p>
                    <strong>4 Months</strong> @2024/8 - 2024/11 -{" "}
                    <strong>Fullstack Developer</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
