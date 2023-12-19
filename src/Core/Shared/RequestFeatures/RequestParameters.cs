namespace Core.Shared.RequestFeatures
{
    public abstract class RequestParameters
    {
        const int maxPageSize = 100;
        public int PageNumber { get; set; } = 1;
        private int _pageSize = 25;
        public string? Sort { get; set; }
        

        public int PageSize
        {
            get { return _pageSize; }
            set
            {
                _pageSize = (value > maxPageSize) ?
                    maxPageSize : value;
            }
        }
    }
}
