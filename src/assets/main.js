const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC55-mxUj5Nj3niXFReG44OQ&hl=en&gl=US';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fcc73abb3amsh21cc7839c052789p12dd97jsn0ef9bb6d3057',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    resp=await fetch('https://youtube138.p.rapidapi.com/channel/videos/?id=UC55-mxUj5Nj3niXFReG44OQ&hl=en&gl=US', options)
	.then(response => response.json())
	.then(response => response.contents)
	.catch(err => console.error(err));
    return resp;
}

(async () => {
    try {
      const videos = await fetchData(API);
        console.log(videos);
      let view = `
      ${videos.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.video.thumbnails[3].url}" alt="${video.video.title}" class="w-full h-full object-cover">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.video.title}
            </h3>
          </div>
        </div>
      `).slice(0, 4).join('')}
      `;
      content.innerHTML = view;
    } catch (error) {
      console.log(error);
    }
  })();