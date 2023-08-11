import { FlatList } from "react-native";

function VirtualizedList({ children, style }: { children: any; style: any }) {
  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
      style={style}
    />
  );
}

export default VirtualizedList;
