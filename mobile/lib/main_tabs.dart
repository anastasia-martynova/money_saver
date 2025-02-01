import 'package:flutter/cupertino.dart';

CupertinoTabBar buildMainTabsBar() {
  return CupertinoTabBar(
    items: mainTabItems,
  );
}

const List<BottomNavigationBarItem> mainTabItems = [
  BottomNavigationBarItem(
    icon: Icon(CupertinoIcons.chart_bar_alt_fill),
    label: 'Сводка',
  ),
  BottomNavigationBarItem(
    icon: Icon(CupertinoIcons.money_rubl_circle_fill),
    label: 'Добавить трату',
  ),
  BottomNavigationBarItem(
    icon: Icon(CupertinoIcons.square_list_fill),
    label: 'Категории',
  ),
];
