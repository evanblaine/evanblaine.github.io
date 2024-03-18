import re


def create_files(filename):

    md_filename = f"{filename}.md"
    with open(f"./pages/{md_filename}", 'w') as f:
        f.write("# " + filename.upper() + "\n\n")
        f.write("This is a sample text to demonstrate Markdown formatting.\n\n")

    html_filename = f"{filename}.html"
    with open(f"./pages/{html_filename}", 'w') as f:
        with open('./pages/template.html', 'r') as template:
            html_content = template.read()
            html_content = html_content.replace('template', filename)
            f.write(html_content)

    with open('index.html', 'r') as f:
        index_content = f.read()

    list_item = f'<li><a class="link-dark" href="./pages/{html_filename}">{filename}</a></li>\n'
    index_content = re.sub('<!-- LIST HERE -->', list_item +
                           '<!-- LIST HERE -->', index_content)

    with open('index.html', 'w') as f:
        f.write(index_content)


filename = input("Enter the name of the file (without .md or .html): ")


create_files(filename)
