import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const NOTIFICATIONS = [
  {
    id: '1',
    type: 'task',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    highlighted: true,
  },
  {
    id: '2',
    type: 'customer',
    title: 'Bạn có khách hàng mới!',
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    highlighted: true,
  },
  {
    id: '3',
    type: 'customer',
    title: 'Khách hàng được chia sẻ bị trùng',
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
    highlighted: false,
  },
  {
    id: '4',
    type: 'customer',
    title: 'Khách hàng được thêm bị trùng',
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
    highlighted: true,
  },
  {
    id: '5',
    type: 'task',
    title: 'Công việc sắp đến hạn trong hôm nay',
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
    highlighted: false,
  },
  {
    id: '6',
    type: 'task',
    title: 'Công việc đã quá hạn',
    message: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
    highlighted: false,
  },
];

const TABS = [
  { id: 'home', label: 'Trang chủ', icon: 'home', active: false },
  { id: 'explore', label: 'Khám phá', icon: 'paper-plane', active: false },
  { id: 'notify', label: 'Thông báo', icon: 'notifications', active: true, badge: true },
  { id: 'account', label: 'Tài khoản', icon: 'person', active: false },
];

function NotificationIcon({ type }) {
  if (type === 'task') {
    return (
      <View style={styles.taskIcon}>
        <Ionicons name="checkmark" size={16} color="#ffffff" />
      </View>
    );
  }

  return <Ionicons name="people" size={24} color="#3e53a4" />;
}

function TabItem({ label, icon, active, badge }) {
  const color = active ? '#344aa0' : '#b9bcc6';

  return (
    <View style={styles.tabItem}>
      <View>
        <Ionicons name={icon} size={20} color={color} />
        {badge ? <View style={styles.badgeDot} /> : null}
      </View>
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
      <FlatList
        data={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, item.highlighted && styles.itemHighlighted]}>
            <View style={styles.iconWrap}>
              <NotificationIcon type={item.type} />
            </View>
            <View style={styles.contentWrap}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.tabBar}>
        <TabItem {...TABS[0]} />
        <TabItem {...TABS[1]} />
        <View style={styles.tabItemCenterSpace} />
        <TabItem {...TABS[2]} />
        <TabItem {...TABS[3]} />
      </View>
      <View style={styles.plusButton}>
        <Ionicons name="add" size={28} color="#ffffff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe3ea',
  },
  header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#d8dde6',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#23262e',
  },
  listContent: {
    backgroundColor: '#ffffff',
    paddingBottom: 96,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#d8dde6',
  },
  itemHighlighted: {
    backgroundColor: '#edf1f8',
  },
  iconWrap: {
    width: 42,
    alignItems: 'center',
    paddingTop: 2,
  },
  taskIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#3b53a3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrap: {
    flex: 1,
    paddingRight: 8,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#31353f',
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
    color: '#4c525d',
    marginBottom: 6,
  },
  date: {
    fontSize: 14,
    color: '#8c929f',
  },
  tabBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 76,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#d8dde6',
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemCenterSpace: {
    width: 70,
  },
  tabLabel: {
    marginTop: 4,
    fontSize: 11,
    color: '#b9bcc6',
  },
  tabLabelActive: {
    color: '#344aa0',
    fontWeight: '700',
  },
  plusButton: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#3b53a3',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#253571',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  badgeDot: {
    position: 'absolute',
    top: -2,
    right: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f34a4a',
  },
});
