# Accordion Component Documentation

## Description

An `Accordion` UI component is a vertically stacked list of items, where each item can be expanded or collapsed to reveal or hide its content. This design pattern helps manage the presentation of large amounts of content by allowing users to expand only the sections they are interested in, keeping the interface clean and organized. 

## `Accordion` Props

### `type`
- **Type:** `string`
- **Default:** `"simple"`
- **Description:** Defines the visual style of the accordion. Options include:
  - `"simple"`: No extra borders or styling.
  - `"separator"`: Adds a separator line between items.
  - `"boxed"`: Adds a border and rounded corners to each item.

### `defaultValue`
- **Type:** `string | []`
- **Description:** Sets the initial active accordion item(s). The value(s) should match the value prop of an `Accordion.Item`. Accepts a single string or an array for multiple items.

### `autoClose`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** If set to true, only one accordion item can be open at a time. Opening one will close the others.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disables all accordion items when set to `true`.

### `children`
- **Type:** `ReactNode`
- **Description:** Expects `Accordion.Item` components as children.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the accordion container.

## `Accordion.Item` Props

### `value`
- **Type:** `string`
- **Description:**  Unique identifier for the item, used to determine which item is active.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disables the specific accordion item when set to `true`.

### `children`
- **Type:** `ReactNode`
- **Description:** Expects `Accordion.Trigger` and `Accordion.Content` components as children.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the accordion item.

## `Accordion.Trigger` Props

### `iconType`
- **Type:** `string`
- **Default:** `"arrow`
- **Description:** Defines the type of icon to display on the trigger button. Options include:
  - `"arrow"`: Displays a chevron arrow that rotates when expanded.
  - `"plus-minus"`: Displays a plus icon when collapsed and a minus icon when expanded.

### `disabled`
- **Type:** `boolean`
- **Default:** `false`
- **Description:** Disables the accordion trigger button when set to `true`.

### `tag`
- **Type:** `string`
- **Default:** `h3`
- **Description:** Defines the HTML tag used for the trigger's container (e.g., h3, h4, etc.).

### `children`
- **Type:** `ReactNode`
- **Description:** The label or content of the trigger button. Text will be left-aligned inside the button.

### `onToggle`
- **Type:** `function`
- **Description:** Callback function triggered when the accordion item is toggled.

### `isOpen`
- **Type:** `boolean`
- **Description:** Indicates whether the accordion item is currently open. Automatically managed by the Accordion component.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the accordion trigger button.

## `Accordion.Content` Props

### `children`
- **Type:** `ReactNode`
- **Description:** The content that is displayed when the accordion item is expanded.

### `className`
- **Type:** `string`
- **Description:** Additional custom class names to style the accordion content.

```jsx
import { Accordion } from '@bsf/force-ui';

const App = () => {
    return (
        <Accordion type="simple" defaultValue="item1">
            <Accordion.Item value="item1">
                <Accordion.Trigger iconType="arrow">Item 1</Accordion.Trigger>
                <Accordion.Content>
                    This is the content for item 1.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item2">
                <Accordion.Trigger iconType="arrow">Item 2</Accordion.Trigger>
                <Accordion.Content>
                    This is the content for item 2.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item3">
                <Accordion.Trigger iconType="arrow">Item 3</Accordion.Trigger>
                <Accordion.Content>
                    This is the content for item 3.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
};

export default App;
```
