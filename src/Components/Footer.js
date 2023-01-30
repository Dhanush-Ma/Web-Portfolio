import React from "react";
import styles from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContainer}>
          <a className={styles.logo} href="#nav">
            <svg
              width="364"
              height="99"
              viewBox="0 0 364 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_1_3)">
                <path
                  d="M76.848 76.512C77.2 76.864 77.136 77.408 76.656 78.144C76.176 78.912 75.536 79.536 74.736 80.016C73.968 80.496 73.408 80.56 73.056 80.208C69.216 76.72 64.944 73.92 60.24 71.808C54.96 77.984 48.864 83.216 41.952 87.504C35.072 91.792 27.696 94.928 19.824 96.912C18.32 97.296 17.024 97.584 15.936 97.776C14.88 97.968 13.568 98.144 12 98.304C10.464 98.464 9.024 98.448 7.68 98.256C6.336 98.064 5.152 97.696 4.128 97.152C3.04 96.576 2.224 95.888 1.68 95.088C1.168 94.288 0.944 93.424 1.008 92.496C1.072 91.6 1.28 90.656 1.632 89.664C2.016 88.704 2.608 87.696 3.408 86.64C4.24 85.584 5.072 84.56 5.904 83.568C6.768 82.608 7.76 81.616 8.88 80.592C10.032 79.568 11.056 78.672 11.952 77.904C12.88 77.104 13.872 76.304 14.928 75.504C16.016 74.704 16.848 74.096 17.424 73.68C18 73.264 18.56 72.848 19.104 72.432C24.416 68.688 30.24 66.16 36.576 64.848L39.84 35.232C39.936 34.56 40.576 33.792 41.76 32.928C42.976 32.064 43.68 31.904 43.872 32.448C43.904 32.576 43.92 32.72 43.92 32.88L40.416 64.224C47.52 63.424 54.4 64.272 61.056 66.768C65.568 60.112 68.176 52.784 68.88 44.784C68.976 42.896 68.976 41.04 68.88 39.216C68.784 37.36 68.448 35.552 67.872 33.792C67.328 32 66.608 30.384 65.712 28.944C64.816 27.472 63.632 26.16 62.16 25.008C60.688 23.856 59.008 22.976 57.12 22.368C55.392 21.824 53.568 21.52 51.648 21.456C49.76 21.36 47.936 21.456 46.176 21.744C44.416 22.032 42.576 22.512 40.656 23.184C38.736 23.824 36.944 24.528 35.28 25.296C33.648 26.064 31.936 26.992 30.144 28.08C28.352 29.136 26.768 30.144 25.392 31.104C24.016 32.032 22.56 33.056 21.024 34.176C19.84 35.072 19.168 35.168 19.008 34.464C18.88 33.76 19.216 32.992 20.016 32.16C20.176 31.968 20.352 31.792 20.544 31.632C22.24 30.384 23.856 29.232 25.392 28.176C26.96 27.12 28.752 26 30.768 24.816C32.784 23.6 34.72 22.56 36.576 21.696C38.432 20.8 40.432 19.984 42.576 19.248C44.752 18.512 46.816 18 48.768 17.712C50.752 17.392 52.816 17.296 54.96 17.424C57.104 17.552 59.136 17.952 61.056 18.624C63.328 19.424 65.28 20.592 66.912 22.128C68.544 23.632 69.792 25.328 70.656 27.216C71.552 29.072 72.192 31.136 72.576 33.408C72.96 35.68 73.12 37.904 73.056 40.08C72.992 42.256 72.768 44.464 72.384 46.704C70.944 54.352 67.968 61.344 63.456 67.68C68.416 69.888 72.88 72.832 76.848 76.512ZM44.16 83.28C49.408 79.856 54.032 75.712 58.032 70.848C56.912 70.4 55.92 70.032 55.056 69.744C50.192 68.08 45.184 67.408 40.032 67.728L39.168 75.36C39.104 76.064 38.464 76.832 37.248 77.664C36.064 78.56 35.36 78.72 35.136 78.144C35.104 78.048 35.104 77.92 35.136 77.76L36.192 68.208C28.576 69.712 21.744 72.912 15.696 77.808C11.824 80.784 8.992 83.632 7.2 86.352C4.16 90.896 5.488 93.488 11.184 94.128C11.312 94.128 11.44 94.144 11.568 94.176C14.224 94.4 17.04 94.256 20.016 93.744C22.992 93.232 25.904 92.416 28.752 91.296C31.6 90.176 34.272 88.96 36.768 87.648C39.264 86.336 41.728 84.88 44.16 83.28ZM96.66 67.968C97.044 67.648 97.604 68.032 98.34 69.12C99.172 70.368 99.396 71.248 99.012 71.76C98.98 71.792 98.948 71.824 98.916 71.856C96.996 73.424 95.252 74.384 93.684 74.736C92.116 75.088 90.836 74.72 89.844 73.632C88.852 72.512 88.356 70.656 88.356 68.064C88.356 67.904 88.42 67.392 88.548 66.528C88.676 65.632 88.772 64.88 88.836 64.272C88.9 63.664 88.884 63.184 88.788 62.832C88.692 62.672 88.628 62.496 88.596 62.304C88.372 62.496 88.116 62.624 87.828 62.688C87.412 62.816 86.948 63.152 86.436 63.696C85.956 64.24 85.556 64.768 85.236 65.28C84.916 65.76 84.516 66.4 84.036 67.2C83.588 68 83.316 68.48 83.22 68.64C81.364 71.264 79.716 74 78.276 76.848L77.892 79.152C77.732 80.08 77.156 79.824 76.164 78.384C75.588 77.552 75.284 76.96 75.252 76.608C75.22 76.48 75.204 76.352 75.204 76.224V76.176C75.236 75.536 75.348 74.896 75.54 74.256L83.124 28.656C83.252 27.952 83.716 28.048 84.516 28.944C85.38 29.936 85.828 30.784 85.86 31.488C85.86 31.52 85.844 31.552 85.812 31.584L80.34 64.368C81.652 62.416 82.932 60.832 84.18 59.616C85.46 58.4 86.548 57.808 87.444 57.84C88.116 57.84 88.708 58.048 89.22 58.464C89.732 58.88 90.132 59.424 90.42 60.096C90.74 60.736 90.98 61.376 91.14 62.016C91.332 62.624 91.46 63.232 91.524 63.84C91.556 64.16 91.508 64.736 91.38 65.568C91.284 66.368 91.172 67.152 91.044 67.92C90.916 68.656 90.868 69.36 90.9 70.032C90.932 70.704 91.076 71.12 91.332 71.28C91.46 71.28 91.588 71.296 91.716 71.328C91.844 71.328 92.02 71.264 92.244 71.136C92.5 71.008 92.724 70.896 92.916 70.8C93.108 70.672 93.348 70.512 93.636 70.32C93.924 70.128 94.164 69.952 94.356 69.792C94.58 69.632 94.82 69.456 95.076 69.264C95.364 69.04 95.588 68.864 95.748 68.736C95.908 68.576 96.084 68.416 96.276 68.256C96.468 68.096 96.596 68 96.66 67.968ZM123.782 64.464C124.07 64.784 124.054 65.216 123.734 65.76C123.414 66.304 123.062 66.752 122.678 67.104C122.646 67.136 122.582 67.2 122.486 67.296C116.182 72.992 112.486 73.872 111.398 69.936C111.11 68.944 110.934 67.936 110.87 66.912C110.422 67.616 109.958 68.288 109.478 68.928C108.422 70.24 107.238 71.424 105.926 72.48C104.614 73.536 103.35 74.048 102.134 74.016C101.238 73.984 100.358 73.504 99.4939 72.576C98.6619 71.616 97.9899 70.592 97.4779 69.504C96.6779 67.872 96.4059 66.144 96.6619 64.32C96.9499 62.464 97.5099 60.752 98.3419 59.184C99.2059 57.616 100.294 56.16 101.606 54.816C103.718 52.672 105.558 51.712 107.126 51.936C108.566 52.16 110.086 53.504 111.686 55.968C111.942 55.104 112.15 54.272 112.31 53.472C112.374 53.088 112.79 53.328 113.558 54.192C114.582 55.376 115.03 56.32 114.902 57.024C114.87 57.056 114.854 57.088 114.854 57.12C114.854 57.152 114.854 57.168 114.854 57.168V57.216C114.886 60.224 114.982 62.704 115.142 64.656C115.142 64.72 115.158 64.912 115.19 65.232C115.222 65.552 115.238 65.792 115.238 65.952C115.27 66.08 115.302 66.288 115.334 66.576C115.398 66.864 115.462 67.104 115.526 67.296C115.622 67.456 115.734 67.632 115.862 67.824C115.99 67.984 116.134 68.112 116.294 68.208C116.55 68.304 116.774 68.368 116.966 68.4C117.19 68.432 117.446 68.368 117.734 68.208C118.054 68.048 118.31 67.904 118.502 67.776C118.726 67.648 118.982 67.456 119.27 67.2C119.59 66.944 119.83 66.736 119.99 66.576C120.182 66.416 120.39 66.224 120.614 66C120.87 65.776 121.046 65.616 121.142 65.52C122.422 64.336 123.302 63.984 123.782 64.464ZM102.422 69.12C106.166 67.168 109.03 63.456 111.014 57.984C110.886 57.824 110.774 57.664 110.678 57.504C110.198 56.736 109.622 56.288 108.95 56.16C108.278 56 107.622 56.064 106.982 56.352C106.342 56.64 105.67 57.088 104.966 57.696C104.294 58.272 103.718 58.848 103.238 59.424C102.758 60 102.326 60.576 101.942 61.152C100.95 62.592 100.182 64.32 99.6379 66.336C98.9979 68.704 99.3499 69.824 100.694 69.696C101.174 69.664 101.75 69.472 102.422 69.12ZM142.763 63.456C142.923 62.88 143.147 62.576 143.435 62.544C143.851 62.512 143.867 63.184 143.483 64.56C142.939 66.64 142.027 68.224 140.747 69.312C139.467 70.368 138.011 70.464 136.379 69.6C135.835 69.312 135.371 68.944 134.987 68.496C134.603 68.048 134.299 67.616 134.075 67.2C133.851 66.784 133.643 66.24 133.451 65.568C133.291 64.896 133.179 64.352 133.115 63.936C133.051 63.488 132.955 62.864 132.827 62.064C132.731 61.232 132.667 60.624 132.635 60.24C132.347 60.496 132.171 60.672 132.107 60.768C131.307 61.76 130.091 63.536 128.459 66.096C126.699 68.88 124.987 71.68 123.323 74.496C122.971 75.104 122.411 74.752 121.643 73.44C120.939 72.288 120.635 71.456 120.731 70.944L126.059 49.296C126.123 48.912 126.539 49.152 127.307 50.016C128.331 51.2 128.763 52.144 128.603 52.848L126.491 61.392C127.131 60.272 127.643 59.392 128.027 58.752C128.443 58.08 128.987 57.344 129.659 56.544C130.363 55.712 130.971 55.216 131.483 55.056C131.963 54.928 132.395 54.992 132.779 55.248C133.195 55.504 133.531 55.904 133.787 56.448C134.075 56.992 134.283 57.488 134.411 57.936C134.571 58.384 134.699 58.848 134.795 59.328C134.859 59.68 134.971 60.336 135.131 61.296C135.291 62.256 135.419 63.024 135.515 63.6C135.643 64.176 135.867 64.816 136.187 65.52C136.507 66.224 136.875 66.736 137.291 67.056C138.411 67.856 139.515 67.792 140.603 66.864C141.723 65.936 142.443 64.8 142.763 63.456ZM163.592 66.432C163.912 66.56 164.04 66.784 163.976 67.104C163.944 67.424 163.848 67.712 163.688 67.968C163.56 68.224 163.4 68.464 163.208 68.688C162.76 69.168 162.28 69.664 161.768 70.176C161.288 70.688 160.616 71.328 159.752 72.096C158.888 72.864 158.072 73.472 157.304 73.92C156.536 74.336 155.768 74.656 155 74.88C154.232 75.072 153.576 74.928 153.032 74.448C152.488 73.936 152.12 73.104 151.928 71.952C151.736 70.864 151.688 69.76 151.784 68.64C150.664 70.24 149.32 71.616 147.752 72.768C147.048 73.248 146.312 73.632 145.544 73.92C144.808 74.176 144.024 74.224 143.192 74.064C142.392 73.872 141.8 73.376 141.416 72.576C140.968 71.744 140.744 70.656 140.744 69.312C140.712 67.968 140.792 66.8 140.984 65.808C141.144 64.816 141.416 63.504 141.8 61.872C142.216 60.208 142.456 59.184 142.52 58.8C142.68 58.128 143.384 57.36 144.632 56.496C145.816 55.664 146.472 55.52 146.6 56.064C146.632 56.192 146.632 56.32 146.6 56.448C146.504 56.928 146.344 57.664 146.12 58.656C145.896 59.648 145.72 60.416 145.592 60.96C145.496 61.504 145.368 62.288 145.208 63.312C145.048 64.304 144.968 65.088 144.968 65.664C145 66.208 145.032 66.96 145.064 67.92C145.224 69.008 145.608 69.696 146.216 69.984C146.824 70.272 147.512 70.016 148.28 69.216C148.6 68.896 148.904 68.56 149.192 68.208C149.48 67.824 149.752 67.392 150.008 66.912C150.296 66.432 150.536 66.032 150.728 65.712C150.952 65.36 151.192 64.88 151.448 64.272C151.736 63.632 151.944 63.2 152.072 62.976C152.2 62.72 152.408 62.224 152.696 61.488C152.984 60.752 153.16 60.304 153.224 60.144C153.288 59.984 153.464 59.504 153.752 58.704C154.072 57.904 154.248 57.472 154.28 57.408C154.472 56.864 155.192 56.208 156.44 55.44C157.72 54.64 158.328 54.592 158.264 55.296C158.232 55.36 158.216 55.424 158.216 55.488C157.384 58.368 156.744 61.296 156.296 64.272C156.264 64.432 156.2 64.752 156.104 65.232C156.008 65.712 155.944 66.112 155.912 66.432C155.88 66.752 155.848 67.136 155.816 67.584C155.784 68 155.8 68.384 155.864 68.736C155.928 69.088 156.024 69.392 156.152 69.648C156.376 70.032 156.6 70.32 156.824 70.512C157.048 70.704 157.272 70.8 157.496 70.8C157.752 70.768 157.976 70.72 158.168 70.656C158.392 70.56 158.632 70.384 158.888 70.128C159.144 69.872 159.352 69.664 159.512 69.504C159.672 69.344 159.88 69.104 160.136 68.784C160.424 68.464 160.616 68.24 160.712 68.112C161.992 66.672 162.952 66.112 163.592 66.432ZM183.691 54.768C184.427 54.48 184.763 54.592 184.699 55.104C184.635 55.84 184.091 56.72 183.067 57.744C182.683 58.128 182.347 58.384 182.059 58.512C178.923 59.696 175.867 61.04 172.891 62.544C173.499 63.408 173.803 64.384 173.803 65.472C173.835 66.528 173.579 67.504 173.035 68.4C172.395 69.744 171.467 71.008 170.251 72.192C169.035 73.344 167.643 74.208 166.075 74.784C164.539 75.328 163.019 75.232 161.515 74.496C160.619 74.048 160.075 73.472 159.883 72.768C159.659 72.032 159.755 71.264 160.171 70.464C160.555 69.632 160.987 68.896 161.467 68.256C161.979 67.584 162.523 66.96 163.099 66.384C164.187 65.328 165.339 64.352 166.555 63.456C165.339 62.08 164.651 60.784 164.491 59.568C164.363 58.352 164.763 56.8 165.691 54.912C166.715 53.024 168.107 51.472 169.867 50.256C171.627 49.04 173.579 48.32 175.723 48.096C176.491 48 176.619 48.432 176.107 49.392C175.531 50.448 174.779 51.248 173.851 51.792C173.595 51.952 173.371 52.032 173.179 52.032C171.451 52.192 170.139 52.96 169.243 54.336C168.347 55.68 168.347 57.104 169.243 58.608C169.755 59.312 170.347 59.952 171.019 60.528C175.115 58.288 179.339 56.368 183.691 54.768ZM166.891 70.944C167.915 70.816 168.667 70.544 169.147 70.128C169.627 69.712 169.819 69.216 169.723 68.64C169.659 68.032 169.483 67.44 169.195 66.864C168.907 66.256 168.523 65.664 168.043 65.088C165.643 66.496 164.315 67.696 164.059 68.688C163.835 69.488 164.027 70.08 164.635 70.464C165.243 70.848 165.995 71.008 166.891 70.944ZM199.316 67.968C199.7 67.648 200.26 68.032 200.996 69.12C201.828 70.368 202.052 71.248 201.668 71.76C201.636 71.792 201.604 71.824 201.572 71.856C199.652 73.424 197.908 74.384 196.34 74.736C194.772 75.088 193.492 74.72 192.5 73.632C191.508 72.512 191.012 70.656 191.012 68.064C191.012 67.904 191.076 67.392 191.204 66.528C191.332 65.632 191.428 64.88 191.492 64.272C191.556 63.664 191.54 63.184 191.444 62.832C191.348 62.672 191.284 62.496 191.252 62.304C191.028 62.496 190.772 62.624 190.484 62.688C190.068 62.816 189.604 63.152 189.092 63.696C188.612 64.24 188.212 64.768 187.892 65.28C187.572 65.76 187.172 66.4 186.692 67.2C186.244 68 185.972 68.48 185.876 68.64C184.02 71.264 182.372 74 180.932 76.848L180.548 79.152C180.388 80.08 179.812 79.824 178.82 78.384C178.244 77.552 177.94 76.96 177.908 76.608C177.876 76.48 177.86 76.352 177.86 76.224V76.176C177.892 75.536 178.004 74.896 178.196 74.256L185.78 28.656C185.908 27.952 186.372 28.048 187.172 28.944C188.036 29.936 188.484 30.784 188.516 31.488C188.516 31.52 188.5 31.552 188.468 31.584L182.996 64.368C184.308 62.416 185.588 60.832 186.836 59.616C188.116 58.4 189.204 57.808 190.1 57.84C190.772 57.84 191.364 58.048 191.876 58.464C192.388 58.88 192.788 59.424 193.076 60.096C193.396 60.736 193.636 61.376 193.796 62.016C193.988 62.624 194.116 63.232 194.18 63.84C194.212 64.16 194.164 64.736 194.036 65.568C193.94 66.368 193.828 67.152 193.7 67.92C193.572 68.656 193.524 69.36 193.556 70.032C193.588 70.704 193.732 71.12 193.988 71.28C194.116 71.28 194.244 71.296 194.372 71.328C194.5 71.328 194.676 71.264 194.9 71.136C195.156 71.008 195.38 70.896 195.572 70.8C195.764 70.672 196.004 70.512 196.292 70.32C196.58 70.128 196.82 69.952 197.012 69.792C197.236 69.632 197.476 69.456 197.732 69.264C198.02 69.04 198.244 68.864 198.404 68.736C198.564 68.576 198.74 68.416 198.932 68.256C199.124 68.096 199.252 68 199.316 67.968ZM267.621 77.664C268.197 76.672 268.773 76.496 269.349 77.136C270.021 77.872 270.229 78.848 269.973 80.064C269.909 80.384 269.813 80.688 269.685 80.976C269.173 82 268.501 83.104 267.669 84.288C266.837 85.504 265.861 86.736 264.741 87.984C263.653 89.232 262.485 90.272 261.237 91.104C260.021 91.968 258.821 92.576 257.637 92.928C256.453 93.28 255.301 93.136 254.181 92.496C253.061 91.856 252.133 90.672 251.397 88.944C250.853 87.792 250.453 86.464 250.197 84.96C249.941 83.488 249.797 82.08 249.765 80.736C249.733 79.424 249.781 77.904 249.909 76.176C250.069 74.416 250.229 72.928 250.389 71.712C250.581 70.496 250.805 69.008 251.061 67.248C251.349 65.456 251.541 64.128 251.637 63.264C252.725 54.816 254.133 45.664 255.861 35.808C250.069 52.544 245.509 65.12 242.181 73.536C242.053 73.824 241.829 74.432 241.509 75.36C239.877 80.192 238.469 83.104 237.285 84.096C235.941 85.248 234.661 84.592 233.445 82.128C233.157 81.552 232.917 80.96 232.725 80.352C232.565 79.776 232.437 79.088 232.341 78.288C232.277 77.488 232.229 76.88 232.197 76.464C232.165 76.016 232.133 75.28 232.101 74.256C232.069 73.232 232.053 72.624 232.053 72.432C231.893 67.888 231.925 61.088 232.149 52.032C232.245 47.936 232.405 42.96 232.629 37.104C230.485 43.664 228.357 50.24 226.245 56.832C222.917 67.264 219.605 77.712 216.309 88.176C216.149 88.688 215.605 88.416 214.677 87.36C213.493 86.016 212.901 84.864 212.901 83.904C212.901 83.776 212.917 83.664 212.949 83.568C216.245 73.104 219.573 62.64 222.933 52.176C225.973 42.64 228.325 35.344 229.989 30.288C230.149 29.776 230.405 28.784 230.757 27.312C231.141 25.808 231.525 24.496 231.909 23.376C232.325 22.256 232.805 21.344 233.349 20.64C233.733 20.096 234.245 20.208 234.885 20.976C235.557 21.744 236.021 22.448 236.277 23.088C236.597 23.856 236.773 24.688 236.805 25.584C236.869 26.48 236.837 27.648 236.709 29.088C236.581 30.496 236.501 31.344 236.469 31.632C236.149 39.088 235.909 45.664 235.749 51.36C235.525 59.136 235.429 65.44 235.461 70.272C235.461 72.256 235.493 74.08 235.557 75.744C236.741 73.632 237.381 72.48 237.477 72.288C238.917 68.8 240.789 63.936 243.093 57.696C248.757 42.336 255.253 23.68 262.581 1.72799C262.773 1.15199 263.333 1.47199 264.261 2.68799C265.381 4.128 265.941 5.296 265.941 6.192C265.941 6.256 265.925 6.32 265.893 6.384C262.437 22.704 259.509 38.416 257.109 53.52C255.349 63.152 254.229 72.864 253.749 82.656C253.589 84.544 254.037 86.288 255.093 87.888C255.797 88.56 256.709 88.64 257.829 88.128C258.981 87.616 260.213 86.704 261.525 85.392C262.837 84.08 264.037 82.72 265.125 81.312C266.213 79.936 267.045 78.72 267.621 77.664ZM289.907 64.464C290.195 64.784 290.179 65.216 289.859 65.76C289.539 66.304 289.187 66.752 288.803 67.104C288.771 67.136 288.707 67.2 288.611 67.296C282.307 72.992 278.611 73.872 277.523 69.936C277.235 68.944 277.059 67.936 276.995 66.912C276.547 67.616 276.083 68.288 275.603 68.928C274.547 70.24 273.363 71.424 272.051 72.48C270.739 73.536 269.475 74.048 268.259 74.016C267.363 73.984 266.483 73.504 265.619 72.576C264.787 71.616 264.115 70.592 263.603 69.504C262.803 67.872 262.531 66.144 262.787 64.32C263.075 62.464 263.635 60.752 264.467 59.184C265.331 57.616 266.419 56.16 267.731 54.816C269.843 52.672 271.683 51.712 273.251 51.936C274.691 52.16 276.211 53.504 277.811 55.968C278.067 55.104 278.275 54.272 278.435 53.472C278.499 53.088 278.915 53.328 279.683 54.192C280.707 55.376 281.155 56.32 281.027 57.024C280.995 57.056 280.979 57.088 280.979 57.12C280.979 57.152 280.979 57.168 280.979 57.168V57.216C281.011 60.224 281.107 62.704 281.267 64.656C281.267 64.72 281.283 64.912 281.315 65.232C281.347 65.552 281.363 65.792 281.363 65.952C281.395 66.08 281.427 66.288 281.459 66.576C281.523 66.864 281.587 67.104 281.651 67.296C281.747 67.456 281.859 67.632 281.987 67.824C282.115 67.984 282.259 68.112 282.419 68.208C282.675 68.304 282.899 68.368 283.091 68.4C283.315 68.432 283.571 68.368 283.859 68.208C284.179 68.048 284.435 67.904 284.627 67.776C284.851 67.648 285.107 67.456 285.395 67.2C285.715 66.944 285.955 66.736 286.115 66.576C286.307 66.416 286.515 66.224 286.739 66C286.995 65.776 287.171 65.616 287.267 65.52C288.547 64.336 289.427 63.984 289.907 64.464ZM268.547 69.12C272.291 67.168 275.155 63.456 277.139 57.984C277.011 57.824 276.899 57.664 276.803 57.504C276.323 56.736 275.747 56.288 275.075 56.16C274.403 56 273.747 56.064 273.107 56.352C272.467 56.64 271.795 57.088 271.091 57.696C270.419 58.272 269.843 58.848 269.363 59.424C268.883 60 268.451 60.576 268.067 61.152C267.075 62.592 266.307 64.32 265.763 66.336C265.123 68.704 265.475 69.824 266.819 69.696C267.299 69.664 267.875 69.472 268.547 69.12ZM307.832 67.968C308.216 67.648 308.776 68.032 309.512 69.12C310.344 70.368 310.568 71.248 310.184 71.76C310.152 71.792 310.12 71.824 310.088 71.856C308.168 73.424 306.424 74.384 304.856 74.736C303.288 75.088 302.008 74.72 301.016 73.632C300.024 72.512 299.528 70.656 299.528 68.064C299.528 67.904 299.592 67.392 299.72 66.528C299.848 65.632 299.944 64.88 300.008 64.272C300.072 63.664 300.056 63.184 299.96 62.832C299.864 62.672 299.8 62.496 299.768 62.304C299.544 62.496 299.288 62.624 299 62.688C298.584 62.816 298.12 63.152 297.608 63.696C297.128 64.24 296.728 64.768 296.408 65.28C296.088 65.76 295.688 66.4 295.208 67.2C294.76 68 294.488 68.48 294.392 68.64C292.536 71.264 290.888 74 289.448 76.848L289.064 79.152C288.904 80.08 288.328 79.824 287.336 78.384C286.76 77.552 286.456 76.96 286.424 76.608C286.392 76.48 286.376 76.352 286.376 76.224V76.176C286.408 75.536 286.52 74.896 286.712 74.256L294.296 28.656C294.424 27.952 294.888 28.048 295.688 28.944C296.552 29.936 297 30.784 297.032 31.488C297.032 31.52 297.016 31.552 296.984 31.584L291.512 64.368C292.824 62.416 294.104 60.832 295.352 59.616C296.632 58.4 297.72 57.808 298.616 57.84C299.288 57.84 299.88 58.048 300.392 58.464C300.904 58.88 301.304 59.424 301.592 60.096C301.912 60.736 302.152 61.376 302.312 62.016C302.504 62.624 302.632 63.232 302.696 63.84C302.728 64.16 302.68 64.736 302.552 65.568C302.456 66.368 302.344 67.152 302.216 67.92C302.088 68.656 302.04 69.36 302.072 70.032C302.104 70.704 302.248 71.12 302.504 71.28C302.632 71.28 302.76 71.296 302.888 71.328C303.016 71.328 303.192 71.264 303.416 71.136C303.672 71.008 303.896 70.896 304.088 70.8C304.28 70.672 304.52 70.512 304.808 70.32C305.096 70.128 305.336 69.952 305.528 69.792C305.752 69.632 305.992 69.456 306.248 69.264C306.536 69.04 306.76 68.864 306.92 68.736C307.08 68.576 307.256 68.416 307.448 68.256C307.64 68.096 307.768 68 307.832 67.968ZM325.594 63.744C326.65 62.784 327.45 62.48 327.994 62.832C328.506 63.152 328.442 63.744 327.802 64.608L327.178 65.328C326.346 66.096 325.514 66.816 324.682 67.488C323.882 68.16 322.874 68.944 321.658 69.84C320.442 70.704 319.258 71.392 318.106 71.904C316.954 72.416 315.77 72.816 314.554 73.104C313.338 73.36 312.186 73.296 311.098 72.912C310.01 72.496 309.05 71.76 308.218 70.704C307.418 69.648 306.986 68.48 306.922 67.2C306.858 65.92 307.098 64.656 307.642 63.408C308.186 62.16 308.81 61.024 309.514 60C310.25 58.944 311.082 57.952 312.01 57.024C313.29 55.744 314.762 54.656 316.426 53.76C319.018 52.384 320.25 52.848 320.122 55.152C319.994 57.04 319.098 59.104 317.434 61.344C315.77 63.552 313.898 65.344 311.818 66.72C312.17 67.264 312.586 67.728 313.066 68.112C316.01 70.288 320.186 68.832 325.594 63.744ZM312.442 60C311.546 61.248 311.098 62.656 311.098 64.224C311.578 63.936 312.298 63.312 313.258 62.352C314.218 61.392 315.018 60.384 315.658 59.328C316.33 58.24 316.458 57.52 316.042 57.168C315.754 56.944 315.338 57.04 314.794 57.456C314.25 57.872 313.786 58.32 313.402 58.8C313.018 59.248 312.698 59.648 312.442 60ZM345.081 54.768C345.817 54.48 346.153 54.592 346.089 55.104C346.025 55.84 345.481 56.72 344.457 57.744C344.073 58.128 343.737 58.384 343.449 58.512C340.313 59.696 337.257 61.04 334.281 62.544C334.889 63.408 335.193 64.384 335.193 65.472C335.225 66.528 334.969 67.504 334.425 68.4C333.785 69.744 332.857 71.008 331.641 72.192C330.425 73.344 329.033 74.208 327.465 74.784C325.929 75.328 324.409 75.232 322.905 74.496C322.009 74.048 321.465 73.472 321.273 72.768C321.049 72.032 321.145 71.264 321.561 70.464C321.945 69.632 322.377 68.896 322.857 68.256C323.369 67.584 323.913 66.96 324.489 66.384C325.577 65.328 326.729 64.352 327.945 63.456C326.729 62.08 326.041 60.784 325.881 59.568C325.753 58.352 326.153 56.8 327.081 54.912C328.105 53.024 329.497 51.472 331.257 50.256C333.017 49.04 334.969 48.32 337.113 48.096C337.881 48 338.009 48.432 337.497 49.392C336.921 50.448 336.169 51.248 335.241 51.792C334.985 51.952 334.761 52.032 334.569 52.032C332.841 52.192 331.529 52.96 330.633 54.336C329.737 55.68 329.737 57.104 330.633 58.608C331.145 59.312 331.737 59.952 332.409 60.528C336.505 58.288 340.729 56.368 345.081 54.768ZM328.281 70.944C329.305 70.816 330.057 70.544 330.537 70.128C331.017 69.712 331.209 69.216 331.113 68.64C331.049 68.032 330.873 67.44 330.585 66.864C330.297 66.256 329.913 65.664 329.433 65.088C327.033 66.496 325.705 67.696 325.449 68.688C325.225 69.488 325.417 70.08 326.025 70.464C326.633 70.848 327.385 71.008 328.281 70.944ZM360.707 67.968C361.091 67.648 361.651 68.032 362.387 69.12C363.219 70.368 363.443 71.248 363.059 71.76C363.027 71.792 362.995 71.824 362.963 71.856C361.043 73.424 359.299 74.384 357.731 74.736C356.163 75.088 354.883 74.72 353.891 73.632C352.899 72.512 352.403 70.656 352.403 68.064C352.403 67.904 352.467 67.392 352.595 66.528C352.723 65.632 352.819 64.88 352.883 64.272C352.947 63.664 352.931 63.184 352.835 62.832C352.739 62.672 352.675 62.496 352.643 62.304C352.419 62.496 352.163 62.624 351.875 62.688C351.459 62.816 350.995 63.152 350.483 63.696C350.003 64.24 349.603 64.768 349.283 65.28C348.963 65.76 348.563 66.4 348.083 67.2C347.635 68 347.363 68.48 347.267 68.64C345.411 71.264 343.763 74 342.323 76.848L341.939 79.152C341.779 80.08 341.203 79.824 340.211 78.384C339.635 77.552 339.331 76.96 339.299 76.608C339.267 76.48 339.251 76.352 339.251 76.224V76.176C339.283 75.536 339.395 74.896 339.587 74.256L347.171 28.656C347.299 27.952 347.763 28.048 348.563 28.944C349.427 29.936 349.875 30.784 349.907 31.488C349.907 31.52 349.891 31.552 349.859 31.584L344.387 64.368C345.699 62.416 346.979 60.832 348.227 59.616C349.507 58.4 350.595 57.808 351.491 57.84C352.163 57.84 352.755 58.048 353.267 58.464C353.779 58.88 354.179 59.424 354.467 60.096C354.787 60.736 355.027 61.376 355.187 62.016C355.379 62.624 355.507 63.232 355.571 63.84C355.603 64.16 355.555 64.736 355.427 65.568C355.331 66.368 355.219 67.152 355.091 67.92C354.963 68.656 354.915 69.36 354.947 70.032C354.979 70.704 355.123 71.12 355.379 71.28C355.507 71.28 355.635 71.296 355.763 71.328C355.891 71.328 356.067 71.264 356.291 71.136C356.547 71.008 356.771 70.896 356.963 70.8C357.155 70.672 357.395 70.512 357.683 70.32C357.971 70.128 358.211 69.952 358.403 69.792C358.627 69.632 358.867 69.456 359.123 69.264C359.411 69.04 359.635 68.864 359.795 68.736C359.955 68.576 360.131 68.416 360.323 68.256C360.515 68.096 360.643 68 360.707 67.968Z"
                  fill="#4CBFA6"
                  fill-opacity="0.89"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_1_3"
                  x="0.911987"
                  y="0.863998"
                  width="362.723"
                  height="101.68"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1_3"
                  />
                </filter>
              </defs>
            </svg>
          </a>
          <div className={styles.links}>
            <a
              href="https://github.com/Dhanush-Ma"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/iamdhanush02"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <p className={styles.footerText}>
          Copyright &copy; 2023. Made with
          <i className={`${"fa-solid fa-heart"} ${styles.heart}`}></i> and
          <i
            className={`${"devicon-react-original colored"} ${styles.rotate}`}
          ></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
