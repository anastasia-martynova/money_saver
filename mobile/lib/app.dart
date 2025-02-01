import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'category_management_view.dart';
import 'analytics_view.dart';
import 'add_expense_view.dart';
import 'main_tabs.dart';

class MoneySaverApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setPreferredOrientations(
        [DeviceOrientation.portraitUp, DeviceOrientation.portraitDown]);

    return CupertinoApp(
      home: CupertinoStoreHomePage(),
    );
  }
}

class CupertinoStoreHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CupertinoTabScaffold(
      tabBar: buildMainTabsBar(),
      tabBuilder: (context, index) {
        switch (index) {
          case 0:
            return CupertinoTabView(builder: (context) {
              return CupertinoPageScaffold(
                child: AnalyticsView(),
              );
            });
          case 1:
            return CupertinoTabView(builder: (context) {
              return CupertinoPageScaffold(
                child: AddExpenseView(),
              );
            });
          case 2:
            return CupertinoTabView(builder: (context) {
              return CupertinoPageScaffold(
                child: CategoryManagementView(),
              );
            });
        }
        return Container();
      },
    );
  }
}
