import dynamic from "next/dynamic";
const DynamicRecordView = dynamic(() => import("@/components/Shared/DynamicRecordView"), { ssr: false });

const RecordANote = () => {
  return <DynamicRecordView />;
};

export default RecordANote;
