import 'package:flutter/cupertino.dart';

class AddExpenseView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Align(
              alignment: Alignment.center,
              child: SizedBox(
                  width: 256,
                  child: CupertinoTextField(
                    placeholder: 'Сколько потратили',
                    padding: EdgeInsets.all(16),
                  )))
        ],
      ),
    );
  }
}
