# ES2023-vs-ES2020

ES2023-vs-ES2020 is about demonstrating the difference between `target: es2020` and `target: es2023` in typescript configuration.

In this demonstartion, we took a feature `toSorted()` which was introduced in `es2023`. `toSorted` helps you to sort the elements by leaving a new array and won't make any changes in original array.

As I mentioned above, the feature `toSorted()` was introduced in `es2023`, so it won't work with `es2022` or below version. If we try to compile the code with `target: es2022` or below version, it will throw error saying `Property 'toSorted' does not exist`.

## Setup process

1. Clone the repo:

```
git clone https://github.com/NithinN05/ES2023-vs-ES2020.git
```

2. Install the dependencies:

```
npm install
```

## Preview Output

To preview output of es2020, run:

```
npm run es2020
```

To preview output of es2023, run:

```
npm run es2023
```
