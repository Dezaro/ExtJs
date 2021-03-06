<?php

$array = '{
  "text": ".",
  "children": [{
    "name": "Модул",
    "children": [
      {
        "item_id": "tab1",
        "name": "Simpsons",
        "description": "Application.view.Simpsons.Simpsons",
        "leaf": true,
        "icon": "img/icon/Simpsons.png",
      },
      {
        "item_id": "tab2",
        "name": "Users",
        "description": "Application.view.users.UserGrid",
        "leaf": true,
        "icon": "img/icon/Users.png",
      }
    ]
  },
  {
    "name": "Small guns",
    "children": [
      {
        "item_id": "tab3",
        "name": "FilterGrid",
        "description": "Application.view.grid.testView",
        "leaf": true,
        "icon": "img/icon/FilterGrid.png",
      },
      {
        "item_id": "tab4",
        "name": "ArrayGrid",
        "description": "Application.view.grid.ArrayGrid",
        "leaf": true,
        "icon": "img/icon/ArrayGrid.png"
      }
    ]
  },
  {
    "name": "Low guns",
    "children": [
      {
        "item_id": "tab5",
        "name": "RowExpander",
        "description": "Application.view.rowExpander.rowExpanderGrid",
        "leaf": true,
        "icon": "img/icon/RowExpander.png"
      },
      {
        "item_id": "tab6",
        "name": "Widget",
        "description": "Application.view.widget.widgetGrid",
        "leaf": true,
        "icon": "img/icon/Widget.png"
      },
      {
        "item_id": "tab7",
        "name": "Search",
        "description": "Application.view.search.searchGrid",
        "leaf": true,
        "icon": "img/icon/Search.png"
      },
      {
        "item_id": "tab8",
        "name": "DragAndDrop",
        "description": "Application.view.DragAndDrop.dragAndDropPanel",
        "leaf": true,
        "icon": "img/icon/DragAndDrop.png"
      }   
    ]
  },
  {
        "item_id": "tab9",
        "name": "MultipleSorting",
        "description": "Application.view.multiSorting.multipleSorting",
        "leaf": true,
        "icon": "img/icon/MultipleSorting.png"
      },
      {
        "item_id": "tab10",
        "name": "TagField",
        "description": "Application.view.tagField.tagField",
        "leaf": true,
        "icon": "img/icon/TagField.png"
      },
      {
        "item_id": "tab11",
        "name": "SpreadSheet",
        "description": "Application.view.spreadSheet.spreadSheetGrid",
        "leaf": true,
        "icon": "img/icon/SpreadSheet.png"
      },
      {
        "item_id": "tab12",
        "name": "Tabs",
        "description": "Application.view.tabs.tabs",
        "leaf": true,
        "icon": "img/icon/Tabs.png"
      },
      {
        "item_id": "tab13",
        "name": "Tree",
        "description": "Application.view.checkTree.checkTree",
        "leaf": true,
        "icon": "img/icon/Tree.png"
      },
      {
        "item_id": "tab14",
        "name": "ReconfigureGrid",
        "description": "Application.view.Reconfigure.reconfigureGrid",
        "leaf": true,
        "icon": "img/icon/ReconfigureGrid.png"
      }
  ]
}';

echo $array;
