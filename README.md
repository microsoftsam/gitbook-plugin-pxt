Gitbooks plugin for PXT
==============

### How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": [
        "pxt@git+https://github.com/samelhusseini/gitbook-plugin-pxt.git"
    ]
}
```

To select a different base site, add this in your `book.json` : 

```json
{
    "pluginsConfig": {
        "pxt": {
            "base": "pxt.microbit.org"
        }
    }
}
```

You can now add PXT based simulator to your book using this tag:

```markdown
{% sim %}
input.onButtonPressed(Button.A, () => {
  basic.showString("Hello!")
})
{% endsim %}
```

```markdown
{% docs %}
``blocks
input.onButtonPressed(Button.A, () => {
  basic.showString("Hello!")
})
``
{% enddocs %}
```


## License

MIT
