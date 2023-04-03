import Image from "next/image";
import { Inter } from "next/font/google";
import { getSession, signOut } from "next-auth/react";
import { FC } from "react";
import { FcRight } from "react-icons/fc";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        parmanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
interface HomeProps {
  session: any;
}
const Home: FC<HomeProps> = ({ session }) => {
  return (
    <main className={inter.className}>
      <div className="profile w-[700px] mx-auto bg-white p-5 mt-20">
        <div className="flex items-center gap-2 flex-col justify-center">
          <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden">
            <Image src={session?.user?.image} fill alt="profile-image" />
          </div>
          <div className="text-center">
            <h4>name: {session?.user?.name}</h4>
            <p>email: {session?.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="bg-slate-100 flex items-center gap-3 px-2 py-2 mx-auto mt-3"
            >
              Logout
              <span>
                <FcRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
